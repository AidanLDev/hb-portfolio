import * as React from "react";

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export interface props {
  title: string;
  description: string;
  date: string;
}

export const DemoCard: React.FC<props> = ({ title, description, date }): JSX.Element => (
  <Card>
    <CardHeader fontSize={24} fontWeight={500}>{title}</CardHeader>
    <CardBody>{description}</CardBody>
    <CardFooter>{date}</CardFooter>
  </Card>
);
