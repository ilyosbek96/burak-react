import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Card, CardOverflow, CssVarsProvider } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";

import VisibilityIcon from "@mui/icons-material/Visibility";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin.webp" },
  { memberNick: "Justin", memberImage: "/img/justin.webp" },
  { memberNick: "Rose", memberImage: "/img/rose.webp" },
  { memberNick: "Nurset", memberImage: "/img/nusRet.webp" },
];

export default function ActiveUsers() {
  return (
    <div className={"active-user-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.memberImage} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <Stack flexDirection={"row"} className="member-nickname">
                        <Typography className={"title"}>
                          {ele.memberNick}
                        </Typography>
                      </Stack>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
