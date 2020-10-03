import React from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";

const blogs = [
  {
    title: "Openstack API",
    info: "Handling openstack through API’s",
    link:
      "https://medium.com/@lalit.garghate/handling-openstack-through-apis-1dd9298b68c8"
  },
  {
    title: "Openstack Installation",
    info: "Two node setup in virtual box for openstack installation",
    link:
      "https://medium.com/@lalit.garghate/two-node-setup-in-virtual-box-for-openstack-installation-a36db75a10fe"
  },
  {
    title: "Web Socket in Golang",
    info: "Websocket in golang to take real time data from mongodb",
    link:
      "https://medium.com/@lalit.garghate/create-websocket-in-golang-to-take-data-from-mongodb-5e90651611a6"
  },
  {
    title: "Zabbix Vsphere Integration",
    info: "Monitor VMware vSphere (vCenter) with Zabbix",
    link:
      "https://medium.com/@lalit.garghate/monitor-vmware-vsphere-vcenter-with-zabbix-44e77d46c1fc"
  }
];

const Blogs = () => {
  return (
    <>
      <Row>
        {blogs.map((value, key) => {
          return (
            <Col xs={12} sm={4} key={key}>
              <a
                target="_blank"
                href={value.link}
                style={{ textDecoration: "none" }}
              >
                <CardComponent title={value.title} info={value.info} />
              </a>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Blogs;
