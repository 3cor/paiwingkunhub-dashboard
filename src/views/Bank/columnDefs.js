const columnDefs = [
  {
    headerName: 'รหัส',
    field: 'id',
    filter: true,
    width: 150,
    sort: 'asc'
  },
  {
    headerName: 'ธนาคาร',
    field: 'payment_bank',
    cellRendererFramework: 'CellRendererBank'
  },
  {
    headerName: 'ชื่อบัญชี',
    field: 'payment_account_name',
    filter: true
  },
  {
    headerName: 'เลขบัญชี',
    field: 'payment_account_number',
    filter: true
  },
  {
    headerName: 'สาขา',
    field: 'payment_branch',
    filter: true
  },
  {
    headerName: 'แสดงหน้าเว็บ',
    field: 'is_shown',
    filter: false,
    cellRendererFramework: 'CellRendererPublished'
  },
  {
    headerName: 'จัดการ',
    field: 'id',
    width: 400,
    filter: false,
    cellRendererFramework: 'CellRendererActions'
  }
]

module.exports = columnDefs
