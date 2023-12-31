"use client";
import { getTransactions } from "@/utils/storageFunctions/storageTransactions";
import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { convertStringToReal } from "@/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useState } from "react";
import { Button } from "../ui";
import { BiPlusCircle } from "react-icons/bi";
import { AddTransaction } from "../molecules";
import EmptyAlert from "../atoms/EmptyAlert";

interface props {
  className?: string;
}

function Transactions({ className }: props) {
  const transactions = getTransactions();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>
        <div>
          Recent Transactions
          <Button
            className=" p-0 bg-transparent text-default-black/60 ml-2 h-1 hover:bg-transparent"
            onClick={() => setIsOpen(true)}
          >
            <BiPlusCircle className="text-sm" />
          </Button>
        </div>
      </ContentName>
      <Card className=" px-3 py-2 h-full">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <TableRow key={transaction.transaction} className=" text-default-black/80">
                    <TableCell className="font-semibold">{transaction.transaction}</TableCell>
                    <TableCell className="">{convertStringToReal(transaction.value)}</TableCell>
                  </TableRow>
                ))
              ) : (
                <EmptyAlert href="/transacoes">Add your recent transactions</EmptyAlert>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {isOpen && <AddTransaction setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Transactions;

