import React from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends React.Component {
    render(){
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
                <hr />
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        );
    }
}

export default Table;