import React from "react";
import Link from "next/link";
import { Grid, Menu } from "semantic-ui-react";
import { HEADER } from "../../constants/texts";

export class NavHeader extends React.Component {
  render() {
    return (
      <div className="AdminPage">
        <Grid padded className="tablet computer only">
          <Menu borderless inverted fluid fixed="top">
            <Link href="/">
              <Menu.Item header as="a">
                관리자 페이지
              </Menu.Item>
            </Link>
            {HEADER.mainNavigation.map((item, i: number) => (
              <Link key={i} href={item.href} as={item.asPath}>
                <Menu.Item name={item.name} />
              </Link>
            ))}
          </Menu>
        </Grid>
      </div>
    );
  }
}
