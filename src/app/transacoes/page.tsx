"use client";
import { useState } from "react";

import { ContentName } from "@/components/atoms";
import { AddTransaction } from "@/components/molecules";
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Card,
} from "@/components/ui";
import { getTransactions, translateTransactionCategory, translateTransactionPayment } from "@/utils";

function Transações() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const transactions = getTransactions();

  return (
    <>
      <div className="flex justify-between mb-7 mx-10">
        <ContentName>Transactions</ContentName>
        <Button className=" bg-primary" onClick={() => setIsOpen(true)}>
          Add
        </Button>
      </div>
      <Card className=" mx-10 min-h-[500px] max-md:min-h-full max-md:mx-0">
        <Table className=" ">
          {transactions.length <= 0 && <TableCaption>List of transactions.</TableCaption>}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Item</TableHead>
              <TableHead>Place of purchase</TableHead>
              <TableHead>Payment method</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.transaction + transaction.category + transaction.value}>
                <TableCell className="font-medium">{transaction.transaction}</TableCell>
                <TableCell>{transaction.place}</TableCell>
                <TableCell>{translateTransactionPayment(transaction.payment)}</TableCell>
                <TableCell>{translateTransactionCategory(transaction.category)}</TableCell>
                <TableCell className="text-right">R$ {transaction.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {isOpen && <AddTransaction setIsOpen={setIsOpen} />}
    </>
  );
}

export default Transações;

