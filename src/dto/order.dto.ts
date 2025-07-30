/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, isString } from "class-validator";


export class CreateOrderDto {
    @ApiProperty({
        description: 'ID of the user placing the order',
        example: 'user123',
        required: true,
    })
    @IsString()
    userId!: string;

    @ApiProperty({
        description: 'ID of the product being ordered',
        example: 'product456',
        required: true,
    })
    @IsString()
    productId!: string;

    @ApiProperty({
        description: 'ID of the order',
        example: 'order789',
        required: true,
    })
    @IsString()
    orderId!: string;

    @ApiProperty({
        description: 'Quantity of the product ordered',
        example: 2,
        required: true,
    })
    @IsNumber()
    quantity!: number;

    @ApiProperty({
        description: 'Total price of the order',
        example: 49.99,
        required: true,
    })
    @IsNumber()
    totalPrice!: number;

    @ApiProperty({
        description: 'Status of the order',
        example: 'pending',
        required: true,
    })
    @IsString()
    status!: string;
}