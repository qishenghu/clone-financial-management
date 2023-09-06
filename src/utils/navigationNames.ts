import { CiViewList, CiWallet } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IconType } from "react-icons";



export const navigationNames = [
  {
    name: "Start",
    href: "/",
    icon: CiViewList,
  },
  {
    name: "Balances",
    href: "/saldo",
    icon: CiWallet,
  },
  {
    name: "Transactions",
    href: "/transacoes",
    icon: BsArrowLeftRight,
  },
  {
    name: "Goals",
    href: "/objetivos",
    icon: TbTargetArrow,
  },
  {
    name: "Expenses",
    href: "/despesas",
    icon: FaMoneyBillTransfer,
  },
];

