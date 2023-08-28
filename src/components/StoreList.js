import React from "react"
import Store from "./Store"

function StoreList({storeList}) {



    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {/** Render a list of <Store> components here. */}
                {
                    storeList.map((store) => <Store key={store.id} store={store} />)
                }
            </tbody>
        
        </table>
    );
}

export default StoreList;