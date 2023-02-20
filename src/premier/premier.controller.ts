import { Controller } from '@nestjs/common';
import { Delete, Get, Patch, Post, Put } from '@nestjs/common/decorators';

@Controller('premier')
export class PremierController {

    @Get()
    getPremier() {
        console.log("This is getPremier");
        return("This is getPremier");
    }

    @Post()
    postPremier() {
        console.log("This is postPremier")
        return("This is postPremier");
    }

    @Put()
    putPremier() {
        console.log("This is putPremier")
        return("This is putPremier");
    }

    @Delete()
    deletePremier() {
        console.log("This is deletePremier")
        return("This is deletePremier");
    }

    @Patch()
    patchPremier() {
        console.log("This is patchPremier")
        return("This is patchPremier");
    }

    

}
