import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.productToShow);
  return (
    <aside className={` ${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-sm bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>
                Detail
            </h2>
            <div>
              <XCircleIcon 
                className='h-6 w-6 text-black ease-in-out cursor-pointer'
                onClick={ () => context.closeProductDetail()}
              ></XCircleIcon>
            </div>
        </div>
        <figure className='px-6'>
          <img 
            className='rounded-lg'
            src={context.productToShow.images}
            alt={context.productToShow.title}
          />
          <div>
            <p className="flex flex-col overflow-y-auto p-6">
              <span className='font-medium text-2xl'>${context.productToShow.price}</span>
              <span className='font-medium text-md'>{context.productToShow.title}</span>
              <span className='font-ligth text-sm'>{context.productToShow.description}</span>
            </p>
          </div>
        </figure>
    </aside>
  )
}

export default ProductDetail