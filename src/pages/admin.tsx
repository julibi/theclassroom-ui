import { AdminInput } from "@/components/admin-input";
import React from "react";
import styles from "../styles/Admin.module.css";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <AdminInput />
    </div>
  );
};

export default Admin;
