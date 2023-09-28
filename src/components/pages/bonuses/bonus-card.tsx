import React from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

const BonusCard = ({
        className,
        title,
        description,
        contentNode,
        actionNode,
    }: {
    className?: string;
    // background: React.ReactNode;
    title: string;
    description: string;
    contentNode: React.ReactNode;
    actionNode: React.ReactNode
}) => {
    return (
        <Card className={cn(className, "flex flex-col justify-between rounded-3xl  border-none min-h-[400px]")}>
            <CardHeader className="p-0">
                <CardTitle className="text-center p-0 pt-2">{title}</CardTitle>
                <CardDescription className="text-center text-gray-50 whitespace-nowrap">{description}</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[200px]">
                {contentNode}
            </CardContent>
            <CardFooter className="flex justify-between">
                {actionNode}
            </CardFooter>
        </Card>
    );
};

export default BonusCard;