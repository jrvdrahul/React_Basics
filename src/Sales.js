import React, { Component } from 'react';
import { render } from 'react-dom';

// react table
import ReactTable from 'react-table';
import "react-table/react-table.css";





class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
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
        ],
    };
  }

  textFilter(filter, row){
    let result =parseInt( row[filter.id].toUpperCase().indexOf(filter.value.toUpperCase()), 10);
    if(result < 0){
      return false;
    }else{
      return true;
    }
  }

  renderItem(item){
    const array = [
      {
        id: 1,
        val: "hello 1"
      },
      {
        id: 2,
        val: "hello 2"
      },
      {
        id: 3,
        val: "hello 3"
      },
      {
        id: 4,
        val: "hello 4"
      },
            {
        id: 5,
        val: "hello 5"
      },
      {
        id: 6,
        val: "hello 6"
      },
    ];

    const filtered = array.filter(x => x.id === parseInt(item,10))[0];
    if(filtered){
      return filtered.val
    }else{
      return 'INVALID'
    }
  }

  render() {
    const columns = [
          {
            Header: 'Name',
            columns:[
              {
                accessor: 'name',
                filterMethod: (filter,row) => {return this.textFilter(filter,row)}
              }
            ]
          },
          {
            Header: 'Price',
            columns:[
              {
                Header: 'Local Price',
                accessor: 'price',
                Cell: row =>( <span className='text-center'>Rp. {row.value}</span> ),
                filterable: false,
              },
              {
                Header: 'International Price',
                accessor: 'price_en',
                Cell: row =>( <span className='text-center'>USD {row.value}</span> ),
                filterable: false,
              }
            ]
          },
          {
            Header: 'Quantity',
            columns:[
              {
                Header: 'S',
                accessor: 'qty_s',
                Cell: row =>( <span className='text-center'>{this.renderItem(row.value)}</span> ),
              },
              {
                Header: 'M',
                accessor: 'qty_m',
              },
              {
                Header: 'L',
                accessor: 'qty_l',
              },
              {
                Header: 'XL',
                accessor: 'qty_xl',
              },
            ]
          }
      ]
    return (
      <div>
        <ReactTable
        data={this.state.data}
        columns={columns}
        noDataText="No Data Available"
        filterable
        defaultPageSize={5}
        className="-striped -highlight" />
      </div>
    );
  }
}

export default App;
