"use client";
import { Badge, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from "react";

const Cards = ({ card }: { card: any }) => {
  return (
    <Card>
      {/* <CardHeader></CardHeader> */}
      <CardBody>
        <div className=" flex gap-0 items-center mb-[14px]">
          <Chip
            className=" font-bold text-lg  px-2 w-12 h-12 mr-3 "
            variant="flat"
            color="secondary"
            size="lg"
          >
            {card.icon}
          </Chip>
          <h3 className=" font-bold text-lg ">{card.title}</h3>
        </div>
        <p className=" text-sm">{card.description}</p>
      </CardBody>
    </Card>
  );
};

export default Cards;
