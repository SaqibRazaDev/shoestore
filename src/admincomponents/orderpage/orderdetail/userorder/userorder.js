
export function UserOrder({currentOrder}){
    return(
        <div class="p-6 space-y-6 overflow-scroll w-[calc(100%-1rem)]">
        <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sm:overflow-scroll">
        <tr>
            <th scope="col" class="px-4 py-3">
                Name
            </th>
            <th scope="col" class="px-4 py-3">
              Image
            </th>
            <th scope="col" class="px-4 py-3">
                Price
            </th>
            <th scope="col" class="px-4 py-3">
                Confirmation
            </th>
        </tr>
    </thead>
        {currentOrder.cartproduct.map((data)=>{
            return (
                    
                  <tr class="bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.title}
                      </th>
                  <td class="px-4 py-4"><img className="w-20" src={data.adimg}/></td>
                  <td class="px-4 py-4">${data.adprice}</td>
                  <td class="px-4 py-4" onClick={()=>{}}><button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                  Confirm
                                </button></td>
                </tr>)
      })
          })}
        </div>
    )
}