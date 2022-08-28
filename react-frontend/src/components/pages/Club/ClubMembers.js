import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  getClubMembersByClubId,
  getUser,
} from "../../../services/club-services";
import { useInRouterContext } from "react-router-dom";

const columns = [
  { id: "name", label: "Name", minWidth: 170, align: "center" },
  {
    id: "designation",
    label: "Designation",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "expertise",
    label: "Expertise",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "socials",
    label: "Socials",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, designation, expertise, socials) {
  return { name, designation, expertise, socials };
}

let rows = [];

export default function ClubMembers() {
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [clubId, setClubId] = React.useState("");
  const [userList, setUserList] = React.useState([]);
  const [listArr, setListArr] = React.useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getClubMembersByClubId(localStorage.getItem("clubId")).then(
        (data) => {
          setMembers(data);
        }
      );
    };
    getData().catch(console.error);
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      const userList = await Promise.all(
        members.map(async (member) => {
            const user = await getUser(member.user_id);
            console.log(user);
            return {
              id: user.id,
              name: user.username,
            };
          })
      );
      setUserList(userList);
      
    };
    getData().catch(console.error);
  }, [members]);

  //setArray(oldArray => [newValue,...oldArray] );

    React.useEffect(() => {
        console.log(userList);
        rows = [];
        for (let i = 0; i < members.length; i++) {
            console.log(userList[i]);
            rows.push(
              createData(userList[i].name, members[i].designation, "None", "None")
            );
            setListArr(listArr => [createData(userList[i].name, members[i].designation, "None", "None"),...listArr]);
          } 
          console.log(rows);
          setLoading(false);
    } , [userList]);

    React.useEffect(() => {
        console.log(listArr);
    } , [listArr]);

  //   React.useEffect(() => {
  //     const getData = async () => {
  //       const userList = members.map(member => {
  //         const user = getUser(member.user_id);
  //         return {
  //             id: useInRouterContext.id,
  //             name: user.name,
  //         }
  //       })
  //     })

  //   getData().catch(console.error);
  //   },[members]);

  

  console.log(members);

  return (
    
    <>
      <h3>Club Members</h3>
      {/* <table>
        <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Expertise</th>
            <th>Socials</th>
        </tr>
        {rows.map((row) => (
            <tr>
                <td>{row.name}</td>
                <td>{row.designation}</td>
                <td>{row.expertise}</td>
                <td>{row.socials}</td>
            </tr>
        ))}

      </table> */}
     
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
