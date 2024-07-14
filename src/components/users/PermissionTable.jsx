import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function PermissionTable({ columns, rows }) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: rows.length,
            },
          },
        }}
        pageSizeOptions={[rows.length]}
        disableRowSelectionOnClick
        density="compact"
        hideFooter
      />
    </Box>
  );
}
