"use client"

import * as React from "react";

export interface props {}

export const Demos: React.FC<props> = (): JSX.Element => (
  <div id='demos'>
    {/* Demos */}
    <h1>
  VO Demos
</h1>
      {/* TODO: Make this a grid */}
      <div>
        <ul>
          <li>Demo 1</li>
          <li>Demo 2</li>
          <li>Demo 3</li>
          <li>Demo 4</li>
        </ul>
      </div>
  </div>
);