import React from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
            {
                "id": 5,
                "name": "Test Product Update",
                "price": 1700,
                "qty_s": 4,
                "qty_m": 5,
                "qty_l": 5,
                "qty_xl": 5,
                "created_at": "2017-09-02 09:29:03",
                "updated_at": "2017-09-02 13:32:39",
                "thumbnail_1": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_2": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_3": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "description": "Test",
                "price_en": 0.12722579
            },
            {
                "id": 4,
                "name": "Test Product 1",
                "price": 1700,
                "qty_s": 5,
                "qty_m": 5,
                "qty_l": 1,
                "qty_xl": 5,
                "created_at": "2017-09-02 09:23:20",
                "updated_at": "2017-09-02 14:18:58",
                "thumbnail_1": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_2": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_3": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "description": "Test",
                "price_en": 0.12722579
            },
            {
                "id": 2,
                "name": "Test Product 2",
                "price": 2000,
                "qty_s": 3,
                "qty_m": 4,
                "qty_l": 5,
                "qty_xl": 4,
                "created_at": "2017-08-21 11:58:56",
                "updated_at": "2017-08-29 01:42:48",
                "thumbnail_1": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_2": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_3": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum risus non tortor molestie vehicula. Nunc pulvinar ex enim, eget fermentum eros volutpat eu. Curabitur a eros odio. Sed et ante vel augue sagittis imperdiet.",
                "price_en": 0.1496774
            },
            {
                "id": 1,
                "name": "Test Product",
                "price": 1000,
                "qty_s": 0,
                "qty_m": 0,
                "qty_l": 0,
                "qty_xl": 5,
                "created_at": "2017-07-19 22:59:53",
                "updated_at": "2017-09-01 10:55:36",
                "thumbnail_1": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_2": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "thumbnail_3": "https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum risus non tortor molestie vehicula. Nunc pulvinar ex enim, eget fermentum eros volutpat eu. Curabitur a eros odio. Sed et ante vel augue sagittis imperdiet.",
                "price_en": 0.0748387
            }
        ]
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "name"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        
      </div>
    );
  }
}

export default App;
