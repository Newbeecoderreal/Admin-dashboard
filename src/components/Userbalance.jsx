import { Box, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { IconCoins } from "@tabler/icons-react";

function Userbalance() {
  return (
    // <Chip
    //   icon={<IconCoins color="#B59410" stroke={1.5} />}
    //   label="1,250,350.00"
    //   variant="outlined"
    //   size="medium"
    //   sx={{ width: "100%" }}
    // />
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "0.5px groove gray",
        borderRadius: "5px",
        p: 0.5,
      }}
    >
      <IconCoins color="#B59410" stroke={1.5} />
      <Typography>500.00</Typography>
    </Box>
  );
}

export default Userbalance;
