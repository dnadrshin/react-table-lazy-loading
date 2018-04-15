import React from 'react';

const Row = props => <tr>
    <td>{props.value || "---"}</td>
</tr>;

export default Row;
