import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IDropdownItem } from "@/types/dropdownItem";

type IDropdownWithIconProps = {
    icon: JSX.Element;
    items: IDropdownItem[];
    selectedValue: string;
    isMultiSelect: boolean;
    onClick: (value: string) => void | undefined;
};

const DropdownWithIcon: React.FC<IDropdownWithIconProps> = (props: IDropdownWithIconProps) => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-8 h-8 p-0 border-none focus:ring-0">
            <Button variant="outline" size="icon" className="min-w-8 h-8 rounded-[50%]">
                {props.icon}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-12" align="center">
            { !props.isMultiSelect && <DropdownMenuRadioGroup
                value={props.selectedValue}
                onValueChange={props.onClick}>
                    {   
                        props.items && props.items.map((item, index) => {
                            return <DropdownMenuRadioItem
                                key={index}
                                value={item.value}>
                                    {item?.labelTx ? item.labelTx : item.label}
                            </DropdownMenuRadioItem>;
                        })
                    }
            </DropdownMenuRadioGroup>}
        </DropdownMenuContent>
    </DropdownMenu>;
}

export default DropdownWithIcon;
