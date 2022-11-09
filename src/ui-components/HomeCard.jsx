/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { testModel, overrides, ...rest } = props;
  const titleOnClick = useNavigateAction({
    type: "url",
    url: "https://trepick.com",
  });
  return (
    <View
      width="708px"
      height="644px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Image
        width="708px"
        height="412px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={testModel?.src}
        {...getOverrideProps(overrides, "naver1 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="48.409088134765625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="708px"
        height="50px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="502px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={testModel?.mainText}
        onClick={() => {
          titleOnClick();
        }}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </View>
  );
}
