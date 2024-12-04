import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-sm bg-white'>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>
                Detail
            </h2>
            <div>
              <XCircleIcon className='h-6 w-6 text-black'></XCircleIcon>
            </div>
        </div>
    </aside>
  )
}

export default ProductDetail