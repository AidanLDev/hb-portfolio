import { Flex, Icon } from "@chakra-ui/react";
import * as React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
export interface props {}

export const Socials: React.FC<props> = (): JSX.Element => (
  <Flex w="100vw" justifyContent="space-evenly">
    <Icon w={8} h={8} _hover={{ color: '#3e55aa' }} cursor='pointer' as={AiFillFacebook} />
    <Icon w={8} h={8} _hover={{ color: '#0077b5' }} cursor='pointer' as={AiFillLinkedin} />
    <Icon w={8} h={8} _hover={{ color: '#61b9ff' }} cursor='pointer' as={AiFillTwitterSquare} />
    <Icon w={8} h={8} _hover={{ color: '#e04d93' }} cursor='pointer' as={AiFillInstagram} />
  </Flex>
);
