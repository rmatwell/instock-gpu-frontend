import React, { useEffect, useState, forwardRef } from 'react';
import MaterialTable from "material-table";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

import Search from '@material-ui/icons/Search';

import '../index.css';

export default function Table({ data }) {

    const defaultMaterialTheme = createTheme();

    const tableIcons = {
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
    };

    const columns = [
        {
            field: "image", sorting: false, cellStyle: {
                backgroundColor: '#f1f1f1',
                color: '#EEE',
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
            },
            render: rowData => <img src={rowData.image} alt="GPU" style={{ height: 70, width: 70, borderRadius: '30%' }} target="_blank" />
        },
        {
            title: "Model", field: "model",
            cellStyle: {
                backgroundColor: '#f1f1f1',
                color: '#000000',
            },
            render: (rowData) => {
                return (
                    <div>
                        < h4 > {rowData.model}</h4 >
                        < h4 > {rowData.brand}</h4 >
                        < h4 > {rowData.chipSet}</h4 >
                    </div>
                )
            }
        },
        {
            title: "Price", field: "price", cellStyle: {
                backgroundColor: '#f1f1f1',
                color: '#000000',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15
            },
            render: (rowData) => {
                return (
                    <div>
                        <div className="price" style={{ color: 'red', fontSize: 20, paddingBottom: 20 }}>
                            <span style={{ fontSize: 18 }}>$</span>
                            <span >{rowData.price}</span>
                        </div>
                    </div>
                )
            }
        },
    ]

    return (
        <div className='container'>
            <ThemeProvider theme={defaultMaterialTheme}>
                <div className='inner-container'>
                    <MaterialTable
                        onRowClick={(event, rowData) => {
                            window.open(rowData.url)
                            event.stopPropagation();
                        }}
                        icons={tableIcons}
                        title=""
                        columns={columns}
                        data={data}
                        options={{
                            search: true,
                            paging: true,
                            pageSize: 50,
                            emptyRowsWhenPaging: false,
                            pageSizeOptions: [50],
                            rowStyle: { borderBottom: '10px solid white' },
                            tableLayout: 'auto'
                        }}>

                    </MaterialTable>
                </div>

            </ThemeProvider>
        </div>
    )
}