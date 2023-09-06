"use client";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ContentName } from "@/components/atoms";
import { AddBill } from "@/components/molecules";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
  Card,
} from "@/components/ui";

import { getBills } from "@/utils/storageFunctions/storageBills";
import { convertStringToReal } from "@/utils";

function Bills() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const bills = getBills();

  return (
    <>
      <div className="flex justify-between mb-7 mx-10">
        <ContentName>Upcoming Bills</ContentName>
        <Button className=" bg-primary" onClick={() => setIsOpen(true)}>
          Add Bill
        </Button>
      </div>
      <Card className=" mx-10 min-h-[500px] max-md:min-h-full">
        <Table className=" ">
          {Bills.length <= 0 && <TableCaption>List of bills payable.</TableCaption>}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Data</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((bill) => (
              <TableRow key={bill.title + bill.value + bill.date}>
                <TableCell className="font-medium">
                  {format(new Date(bill.date), "PP", { locale: ptBR })}
                </TableCell>
                <TableCell className="font-medium">{bill.title}</TableCell>
                <TableCell className="font-medium">{bill.category}</TableCell>
                <TableCell className="font-medium">{convertStringToReal(bill.value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {isOpen && <AddBill setIsOpen={setIsOpen} />}
    </>
  );
}

export default Bills;

