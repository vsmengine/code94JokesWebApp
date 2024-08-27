import styles from "./index.module.css"
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { ExitIcon } from '@radix-ui/react-icons'
import { ILinkItem } from "@/types/linkItem";

type IHeaderProps = {
    onClick?: (value: string) => void;
}

export default function Header(props: IHeaderProps) {
    const headerLinkItems: ILinkItem[] = [
        {id: 1, name: "jokes", link: "/jokes", label: "Jokes", labelTx: "", sortOrder: 1},
    ];
    
    return <header className="flex justify-between items-center px-4 py-4 bg-slate-900 rounded-b-xl">
        <div className="flex justify-start items-center gap-x-1 text-white">
            <Image
                className={styles.logo + " mr-3"}
                src="./next.svg"
                alt="Next.js Logo"
                width={100}
                height={20}
                priority
            />
            { headerLinkItems.length > 0 &&  headerLinkItems.map((item, index) => {
                return <Link
                    key={index}
                    className="px-2 py-1"
                    href={item.link}>
                        {item.labelTx ? item.labelTx : item.label}
                    </Link>
            })}
        </div>
        <div className="flex justify-end items-center gap-x-4">
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ExitIcon className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu> */}
        </div>
    </header>;
}