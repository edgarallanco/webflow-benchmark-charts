"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilitySpacing } from "./UtilitySpacing";

export function SectionFooter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="footer" tag="footer">
      <_Builtin.Block className="container is-large" tag="div">
        <_Builtin.Block className="footer_component" tag="div">
          <UtilitySpacing variant="sp-l" />
          <_Builtin.Block className="footer_content" tag="div">
            <_Builtin.Block className="footer_top" tag="div">
              <_Builtin.Block className="footer_top-content" tag="div">
                <_Builtin.DOM
                  className="footer_logo"
                  tag="svg"
                  slot=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 158 35"
                  fill="none"
                >
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M0 22.0538H6.74087C6.78591 22.5342 6.81593 22.9696 6.87599 23.405C7.05614 25.777 8.82768 27.7287 11.1697 28.164C13.3466 28.6895 15.6136 28.6144 17.7454 27.9238C18.9165 27.6386 19.8773 26.7829 20.2827 25.6569C20.9132 23.9755 20.1776 22.0989 18.5862 21.2882C17.3551 20.7477 16.049 20.3424 14.7128 20.1172C12.5209 19.6068 10.299 19.1264 8.13708 18.4958C7.04113 18.1355 5.99021 17.6401 5.01436 17.0246C3.03264 15.8986 1.66645 13.9169 1.32115 11.665C1.02089 10.1337 1.06593 8.55739 1.48629 7.0411C2.20692 4.6841 3.87337 2.74745 6.08029 1.68155C7.83682 0.75076 9.77351 0.210301 11.7402 0.105212C14.1273 -0.150004 16.5444 0.0601741 18.8564 0.735747C20.7781 1.33626 22.5196 2.38715 23.9458 3.79835C25.8825 5.75 26.9034 8.42227 26.7683 11.1696C26.7683 11.5299 26.6482 11.695 26.2729 11.695C24.3362 11.695 22.4145 11.695 20.4778 11.695C20.1025 11.695 19.9674 11.5449 19.9674 11.1846C19.9974 10.7042 19.9674 10.2088 19.8623 9.72838C19.4119 7.95688 17.9556 6.60573 16.1541 6.29046C14.3975 5.8701 12.5659 5.90013 10.8244 6.38054C10.2539 6.54568 9.71346 6.81591 9.23304 7.1612C7.9269 8.09199 7.61163 9.92354 8.55745 11.2297C8.75262 11.5149 9.00784 11.7551 9.27808 11.9353C10.0137 12.4457 10.8394 12.806 11.7102 12.9711C13.767 13.4365 15.8238 13.8419 17.8806 14.3223C20.1475 14.8027 22.2794 15.7635 24.141 17.1297C25.8825 18.4508 26.9935 20.4325 27.2337 22.5943C27.4889 24.2307 27.3538 25.8971 26.8734 27.4734C26.0176 30.1157 23.9759 32.2175 21.3636 33.1633C19.6221 33.8388 17.7905 34.2292 15.9139 34.3192C13.5718 34.5294 11.1997 34.3793 8.90275 33.8388C4.42885 32.9381 0.990863 29.335 0.300261 24.8162C0.135118 23.9304 0.120105 23.0147 0.0300261 22.0238L0 22.0538Z"
                    fill="currentColor"
                  />
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M95.0617 23.1249C95.5572 24.536 96.0526 25.9322 96.548 27.3284C97.2386 29.25 97.9142 31.1717 98.6198 33.0933C98.6649 33.1984 98.6949 33.3035 98.7249 33.4086C98.8601 33.949 98.755 34.1142 98.2145 34.1142C96.1277 34.1142 94.0409 34.1142 91.954 34.1142C91.5337 34.1142 91.3835 33.934 91.2634 33.5737C90.5278 31.2768 89.7621 28.9798 89.0115 26.6829C88.9815 26.5778 88.9364 26.4727 88.8613 26.3076C84.7177 27.5536 80.3489 27.9139 76.0552 27.3434C75.77 28.2142 75.4697 29.0849 75.1845 29.9707C74.7941 31.1717 74.3737 32.3727 74.0134 33.5737C73.9534 33.934 73.6231 34.1742 73.2628 34.1142C71.3261 34.0992 69.3894 34.1142 67.4677 34.1142C66.8672 34.1142 66.7321 33.934 66.9123 33.3335C67.1224 32.6579 67.3927 31.9974 67.6329 31.3218L78.3222 1.16121C78.5774 0.455616 78.5774 0.455616 79.3431 0.455616C81.6551 0.455616 83.9671 0.455616 86.2791 0.455616C87.1048 0.455616 86.9697 0.395565 87.2099 1.10116L92.7948 16.7745C92.8849 17.0297 92.9749 17.2699 93.095 17.5701C94.4162 16.4592 95.6022 15.2131 96.6381 13.847C96.7582 14.0872 96.8333 14.2373 96.8933 14.3874C97.5089 16.0088 98.1094 17.6302 98.7399 19.2366C98.9051 19.5368 98.815 19.9121 98.5448 20.1073C97.5689 20.978 96.5931 21.8488 95.6172 22.7195C95.4521 22.8696 95.2719 22.9897 95.0617 23.1399V23.1249ZM82.706 7.34646H82.5709C80.9945 12.1956 79.4181 17.0447 77.8117 21.9989C80.9645 22.3292 84.1473 21.9989 87.1649 21.0231C85.6636 16.3991 84.1923 11.8653 82.721 7.34646H82.706Z"
                    fill="currentColor"
                  />
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M141.136 19.7274C141.121 20.0127 141.091 20.2078 141.091 20.418V27.429C141.091 28.1195 141.091 28.1195 141.796 28.1346H157.635V34.0796H134.44V0.496094H157.635V6.50119H142.006C141.076 6.50119 141.091 6.38109 141.091 7.38694V12.8516C141.091 13.4521 141.406 13.7523 142.021 13.7523H156.179C156.194 14.0376 156.224 14.2177 156.224 14.4129C156.224 15.9292 156.224 17.4305 156.224 18.9468C156.224 19.4672 155.974 19.7274 155.473 19.7274H141.136Z"
                    fill="currentColor"
                  />
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M63.264 12.7037H56.4931C56.4331 12.4635 56.373 12.2082 56.328 11.953C55.8776 8.87541 53.3854 6.5034 50.2927 6.21815C48.5062 5.94792 46.6746 6.1581 45.0081 6.83368C42.9063 7.77948 41.3299 9.59602 40.6844 11.8029C39.9187 14.1149 39.6635 16.5469 39.9187 18.964C40.0238 20.6754 40.4442 22.3418 41.1798 23.8881C42.4709 26.6655 45.2934 28.407 48.3561 28.3319C49.437 28.392 50.533 28.2869 51.5839 27.9866C53.9559 27.266 55.7575 25.3294 56.298 22.9123C56.5682 21.9965 56.5532 21.9965 57.514 21.9965H62.4533C62.6935 21.9965 62.9337 22.0116 63.204 22.0266C63.174 23.1525 62.9488 24.2635 62.5434 25.3144C60.9971 29.9833 56.9435 33.3912 52.0793 34.1118C49.3769 34.6072 46.6145 34.5022 43.9572 33.8116C40.279 32.8958 37.1713 30.4637 35.3848 27.1159C34.2438 25.0591 33.5081 22.7922 33.2379 20.4502C32.8325 17.5378 32.9827 14.5802 33.6733 11.7128C34.454 8.06472 36.5408 4.83698 39.5434 2.63011C41.5101 1.24894 43.8221 0.393211 46.2092 0.183032C48.4311 -0.132235 50.6981 -0.0421586 52.89 0.468275C57.9644 1.53418 61.9279 5.52757 62.9638 10.6169C63.1289 11.2774 63.174 11.968 63.279 12.7037H63.264Z"
                    fill="currentColor"
                  />
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M105.933 0.496094H112.539C112.569 2.02739 112.539 3.54368 112.539 5.05997C112.539 6.57625 112.539 8.12257 112.539 9.65387V28.0445H127.942C127.972 28.2997 128.002 28.4949 128.002 28.69V33.419C128.002 34.0796 128.002 34.0796 127.327 34.0796C120.406 34.0796 113.47 34.0796 106.549 34.0796C105.903 34.0796 105.903 34.0796 105.903 33.404V1.03655C105.903 0.886425 105.903 0.736298 105.933 0.496094Z"
                    fill="currentColor"
                  />
                </_Builtin.DOM>
                <_Builtin.Block className="social-links-wrap" tag="div">
                  <_Builtin.List
                    className="social-list"
                    tag="ul"
                    unstyled={true}
                  >
                    <_Builtin.ListItem className="social-list-item">
                      <_Builtin.Link
                        className="social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.DOM
                          className="social-icon"
                          tag="svg"
                          slot=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            d="M21.0319 12.0335C21.0319 7.04391 16.988 3 11.9984 3C7.00876 3 2.96484 7.04391 2.96484 12.0335C2.96484 16.268 5.88309 19.8249 9.81762 20.8024V14.793H7.95445V12.0335H9.81762V10.8443C9.81762 7.77083 11.2079 6.34523 14.2285 6.34523C14.8002 6.34523 15.7882 6.45815 16.194 6.57106V9.0694C15.9823 9.04823 15.6118 9.03411 15.1495 9.03411C13.6674 9.03411 13.0958 9.59518 13.0958 11.0525V12.0335H16.0458L15.5377 14.793H13.0923V21C17.5667 20.4601 21.0319 16.6526 21.0319 12.0335Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="social-list-item">
                      <_Builtin.Link
                        className="social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.DOM
                          className="social-icon"
                          tag="svg"
                          slot=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="social-list-item">
                      <_Builtin.Link
                        className="social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.DOM
                          className="social-icon"
                          tag="svg"
                          slot=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <_Builtin.DOM
                            tag="path"
                            slot=""
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                            fill="currentColor"
                          />
                        </_Builtin.DOM>
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="social-list-item">
                      <_Builtin.Link
                        className="social-link"
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      />
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="footer_bottom" tag="div">
              <_Builtin.Block className="footer_bottom-content grid" tag="div">
                <_Builtin.Block
                  className="footer_breadcrumb-col grid-column"
                  tag="div"
                >
                  <_Builtin.List
                    className="footer_breadcrumb-list"
                    tag="ul"
                    unstyled={false}
                  >
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Approach"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Portfolio"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Team"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Founder Experience"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                </_Builtin.Block>
                <_Builtin.Block
                  className="footer_breadcrumb-col grid-column"
                  tag="div"
                >
                  <_Builtin.List
                    className="footer_breadcrumb-list"
                    tag="ul"
                    unstyled={false}
                  >
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Perspectives"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Press"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="footer_breadcrumb-item">
                      <_Builtin.Link
                        className="footer_link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"FAQs"}
                      </_Builtin.Link>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="footer_breadcrumb-item" />
                  </_Builtin.List>
                </_Builtin.Block>
                <_Builtin.Block
                  className="footer_news-wrap grid-column"
                  tag="div"
                >
                  <_Builtin.FormWrapper>
                    <_Builtin.FormForm
                      className="news-form_container"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      id="email-form"
                    >
                      <_Builtin.Block
                        className="text-s text-family-saans"
                        tag="div"
                      >
                        {
                          "Join our newsletter to stay up to date on Scale and our portfolio companies."
                        }
                      </_Builtin.Block>
                      <_Builtin.Block className="news-form_wrap" tag="div">
                        <_Builtin.FormTextInput
                          className="news-form_text-field"
                          autoFocus={false}
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder="Enter your email"
                          type="email"
                          disabled={false}
                          required={true}
                          id="email"
                        />
                        <_Builtin.FormButton
                          className="button"
                          type="submit"
                          value="Subscribe"
                          data-wait="Please wait..."
                        />
                      </_Builtin.Block>
                    </_Builtin.FormForm>
                    <_Builtin.FormSuccessMessage>
                      <_Builtin.Block tag="div">
                        {"Thank you! Your submission has been received!"}
                      </_Builtin.Block>
                    </_Builtin.FormSuccessMessage>
                    <_Builtin.FormErrorMessage>
                      <_Builtin.Block tag="div">
                        {
                          "Oops! Something went wrong while submitting the form."
                        }
                      </_Builtin.Block>
                    </_Builtin.FormErrorMessage>
                  </_Builtin.FormWrapper>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <UtilitySpacing variant="sp-l" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="container" tag="div">
        <_Builtin.Block
          className="footer_footnotes text-xxs text-family-saans"
          tag="div"
        >
          <_Builtin.Block className="footer_footnotes-left" tag="div">
            <_Builtin.Block tag="div">
              {"© "}
              <_Builtin.Span id="date">{"2026"}</_Builtin.Span>
              {" Scale Venture Partners. All rights reserved."}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="footer_footnotes-right" tag="div">
            <_Builtin.List
              className="footer_legal-wrap"
              tag="ul"
              unstyled={false}
            >
              <_Builtin.ListItem>
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy Policy"}
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Terms & Conditions"}
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Web Accessibility"}
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem />
            </_Builtin.List>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
