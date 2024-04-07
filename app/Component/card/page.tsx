"use client";
import { Anchor, Button, Card, Flex, Image, Text } from "@mantine/core";

import UserImage from "../logo/page";

const UserCard = ({ name, email, phone, website }) => {
  return (
    <Card
      shadow="xl"
      padding="xl"
      style={{
        width: "400px",
        height: "370px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
      }}
    >
      <UserImage name={name} />
      <Text size="xl" style={{ marginTop: "10px" }}>
        {name}
      </Text>
      <Flex
        direction="column"
        align="start"
        style={{ marginTop: "10px", width: "100%" }}
      >
        <Anchor
          style={{ color: "var(--mantine-color-dimmed)" }}
          href={`mailto:${email}`}
          target="_blank"
        >
          {email}
        </Anchor>
        <Anchor
          style={{ color: "var(--mantine-color-dimmed)" }}
          href={`tel:${phone}`}
          target="_blank"
        >
          {phone}
        </Anchor>
        <Anchor
          style={{ color: "var(--mantine-color-dimmed)" }}
          href={`https://${website}`}
          target="_blank"
        >
          {website}
        </Anchor>
      </Flex>
      <Flex
        gap="sm"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "20px" }}
      >
        <Button style={{ width: "150px" }}>
          <Flex gap="xs" align="center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
              >
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
            <Text style={{ marginLeft: "5px" }}>Follow</Text>
          </Flex>
        </Button>
        <Button style={{ width: "150px" }}>
          <Flex gap="xs" align="center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
              >
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </span>
            <Text style={{ marginLeft: "5px" }}>Delete</Text>
          </Flex>
        </Button>
      </Flex>
    </Card>
  );
};

export default UserCard;