import Card from "../UI/dashboard/card/card"
import Chart from "../UI/dashboard/chart/chart"
import styles from "../UI/dashboard/dashboard.module.css"
import Rightbar from "../UI/dashboard/rightbar/rightbar"
import Transactions from "../UI/dashboard/transactions/transactions"

const Dashboard = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <Transactions/>
          <Chart/>
        </div>
        <div className={styles.side}>
          <Rightbar/>
        </div>
      </div>
    )
  }
  
  export default Dashboard