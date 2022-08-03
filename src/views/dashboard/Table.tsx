// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

interface RowType {
  id:number
  first_name: string
  last_name: string
  dob: string
  email: string
  mobile_number: string
}

const rows: RowType[] = [
  {
    id:1,
    first_name: "Amila",
    last_name: "Perera",
    dob: "26/06/1995",
    email: "amilaperera97@gmail.com",
    mobile_number: "44"
  },
  {
    id:2,
    first_name: "John",
    last_name: "Steve",
    dob: "16/05/1990",
    email: "johnsteve@gmail.com",
    mobile_number: "44"
  }
]

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.mobile_number}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
