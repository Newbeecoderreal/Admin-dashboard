import { useMediaQuery, useTheme } from "@mui/material";

function MediaQueryHook() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return { mobile, tablet, desktop };
}

export default MediaQueryHook;
