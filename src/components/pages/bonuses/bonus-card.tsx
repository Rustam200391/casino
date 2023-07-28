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
        <Card className="flex flex-col justify-between rounded-3xl bg-zinc-950 border-none min-h-[400px]">
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
                <CardDescription className="text-center">{description}</CardDescription>
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