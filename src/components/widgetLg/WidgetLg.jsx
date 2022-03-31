import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Decline" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/24/c7514515e386b98ea994dbd42240a4f6_original.jpg?impolicy=abp_cdn&imwidth=720"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
