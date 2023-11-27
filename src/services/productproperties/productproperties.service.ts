import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { ProductProperties } from 'src/tables/ProductProperties';
import { Repository } from 'typeorm'

@Injectable()
export class ProductpropertiesService {
    constructor(@InjectRepository(ProductProperties) private productproperties: Repository<ProductProperties>) { }
    getProductProperties() {
        return this.productproperties.find({ relations: ["product"] })
    }

    insertProductProperties(productpropertiesData) {
        const newProductProperties = this.productproperties.create(productpropertiesData)
        this.productproperties.save(newProductProperties)
        return { msg: 'Productproperties created successfully' }
    }

    updateProductProperties(id, data) {
        this.productproperties.update(id, data)
        return { msg: 'Productproperties updated successfully' }
    }

    deleteProductProperties(id) {
        this.productproperties.delete(id)
        return { msg: 'Productproperties deleted successfully' }
    }

    getProductPropertiesById(id) {
        return this.productproperties.findOne({ where: { id: id.id }, relations: ["product"] })
    }
}
