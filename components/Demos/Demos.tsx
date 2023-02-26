import * as React from "react";
import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { DemoCard } from './DemoCard';

export interface props {}

const mockDemos = [
  { title: 'Example 1', description: "Mollit velit deserunt voluptate velit minim.", date: "2023-01-07" },
  { title: 'Example 2', description: "Consequat proident consequat dolore laborum consectetur anim fugiat.", date: "2022-06-01" },
  { title: 'Example 3', description: "Eu qui eu ut do ex sint laboris dolore.", date: "2022-12-25" }
]

export const Demos: React.FC<props> = (): JSX.Element => (
  <div id="demos">
    {/* Demos */}
    <Heading pb={20}>VO Demos</Heading>
    <Grid templateColumns='repeat(3, 1fr)' gap={6} pb={20}>
      {mockDemos.map(({title, description, date}, idx) => (
        <GridItem key={`${title}__${idx}`}>
          <DemoCard  title={title} description={description} date={date} />
        </GridItem>))}
    </Grid>
  </div>
);
