import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from 'src/tables/Product';
import { Repository } from 'typeorm'

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private product: Repository<Product>) {}
    getProducts() {
        return this.product.find({relations: ['productproperties']})
    }

    insertProduct(productData, imageName) {
        console.log(productData, imageName)
        const newProduct = this.product.create({...productData, image: imageName})
        this.product.save(newProduct)
        return {msg: 'Product created successfully'}
    }

    getProductById(id) {
        return this.product.findOne({where: {id: id.id}, relations: ["productproperties"]})
    }

    updateProduct(id, data) {
        return this.product.update(id, data)
    }

    deleteProduct(id) {
        return this.product.delete(id)
    }
}
