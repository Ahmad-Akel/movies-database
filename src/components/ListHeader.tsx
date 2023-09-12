import { Typography } from "@mui/material";

interface Props {
  mainTitle: string;
}
export default function ListHeader({ mainTitle }: Props) {
  return <Typography variant="h1">{mainTitle}</Typography>;
}
