import { Typography } from "@mui/material";

interface Props {
  mainTitle: string;
}
export default function ListHeader({ mainTitle }: Props) {
  return <Typography variant="h2">{mainTitle}</Typography>;
}
