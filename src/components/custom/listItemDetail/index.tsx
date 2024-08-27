import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { IListItem } from "@/types/listItem";

type IListItemDetailProps = {
    listItem: IListItem;
};

const ListItemDetail: React.FC<IListItemDetailProps> = (props: IListItemDetailProps) => {

    return <Card className="w-full border-0 shadow-none">
        <CardHeader className="flex flex-col justify-start items-start gap-4 pb-3 relative">
            <div>
                <CardTitle className="text-base">{props.listItem?.title}</CardTitle>
                <CardDescription className="text-sm">{props.listItem?.author}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="text-xs pb-4 text-justify">
            {props.listItem.content}
        </CardContent>
    </Card>;
}

export default ListItemDetail;
