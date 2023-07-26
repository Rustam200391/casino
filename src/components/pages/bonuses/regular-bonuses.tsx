import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const RegularBonuses = () => {

    return (
        <div className="flex justify-between">
            <Card className="w-[310px] rounded-3xl bg-transparent border-neutral-600">
                <CardHeader>
                    <CardTitle>Введите промокод и получите бонус</CardTitle>
                    <CardDescription>Вы можете активировать помокод раз в неделю</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input className="rounded-full border-neutral-600" placeholder="SYNDICATE123" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="w-full border-neutral-600">Активировать</Button>
                </CardFooter>
            </Card>

            <Card className="w-[50%] rounded-3xl flex flex-col bg-transparent border-neutral-600 justify-between">
                <CardHeader>
                    <CardTitle>Крутите рулетку и получайте рубины</CardTitle>
                    <CardDescription>Раз в 24 часа крути рулетку и получай до 20 рубинов на баланс</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" className="w-full border-green-500 hover:bg-green-500">Крутить</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RegularBonuses;