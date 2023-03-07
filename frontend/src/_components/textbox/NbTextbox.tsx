/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @module NbTextbox
 */
import React from "react";
import { NbTextboxProps } from "./NbTextbox.props";

/**
 * @description Text Fields let users enter and edit text. This is customized to have icons at the start and end and error or success messages.
 * @param {NbTextboxProps} props
 */
export const NbTextbox = (props: NbTextboxProps) => {
  const {
    name,
    onChange,
    visibility = true,
    disabled,
    value,
    size,
    placeholder,
    caption,
    helpTask,
    hideCaption,
    error,
    success,
    startIcon,
    endIcon,
    endIcons,
    className,
    style,
    mandatory,
    id,
    helpTaskId,
    captionId,
    fieldId,
    iconId,
    onTask,
    variant,
    color,
    uiTask
  } = props;

  /**
   * @method handleChange
   * @description A helper method passing the data into the onChange prop.
   * @param {any} event change event that is registered when a character is entered in textbox
   * @returns void
   */
  const handleChange = (event: any) => {
    const data = { name, value: event.target.value };
    if (onChange) onChange(data);
  };
  const handletask = (event: any) => {
    const data = { name, event };
    if (onTask) onTask(data);
  };

  /**
   * @method computeSize
   * @description A helper method to compute the size of the textbox
   * @returns the code for the size of the textbox
   */
  const computeSize = () => {
    if (size === "large") {
      return "l";
    } else if (size === "extra-large") {
      return "xl";
    }
    // else if (size === "large") {
    //   return "l";
    // }
  };

  if (visibility === false) {
    return <></>;
  } else {
    return (
      <>
        <div id={id} className={className} style={style}>
          <div
            className={`r-input-form-group ${variant === "material" ? "material open" : variant}`}
          >
            {hideCaption === true ? (
              <></>
            ) : (
              <>
                <label
                  className={`r-caption ${variant}`}
                  id={captionId ? captionId : "nbtextbox_caption_id"}
                >
                  {caption}
                </label>
                <div style={{ clear: "both" }}></div>
              </>
            )}

            {startIcon && !endIcon && (
              <div className="r-input-wrapper">
                <div
                  className={`icon-nowrap icon-${computeSize()} r-form-icon left top`}
                  onClick={handletask}
                  id={iconId ? iconId : "nbtextbox_icon_id"}
                >
                  {startIcon}
                </div>
                <input
                  type="text"
                  className={`r-input-form-control size-${computeSize()} ${variant} icon-left ${uiTask ? "uitask" : ""} ${mandatory ? "mandatory" : ""} ${color}`}
                  value={value}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder={placeholder}
                  id={fieldId ? fieldId : "nbtextbox_field_id"}
                />
              </div>
            )}

            {!startIcon && endIcon && (
              <div className="r-input-wrapper">
                <div
                  className={`icon-nowrap icon-${computeSize()} r-form-icon right top`}
                  onClick={handletask}
                  id={iconId ? iconId : "nbtextbox_icon_id"}
                >
                  {endIcon}
                </div>
                <input
                  type="text"
                  className={`r-input-form-control size-${computeSize()} ${variant} icon-right ${uiTask ? "uitask" : ""} ${mandatory ? "mandatory" : ""} ${color}`}
                  value={value}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder={placeholder}
                  id={fieldId ? fieldId : "nbtextbox_field_id"}
                />
              </div>
            )}

            {startIcon && endIcon && (
              <div className="r-input-wrapper">
                <div
                  className={`icon-nowrap icon-${computeSize()} r-form-icon left top`}
                  onClick={handletask}
                  id={iconId ? iconId : "nbtextbox_icon_id"}
                >
                  {startIcon}
                </div>
                <input
                  type="text"
                  className={`r-input-form-control size-${computeSize()} ${variant} icon-left-right ${uiTask ? "uitask" : ""} ${mandatory ? "mandatory" : ""} ${color}`}
                  value={value}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder={placeholder}
                  id={fieldId ? fieldId : "nbtextbox_field_id"}
                />
                <div
                  className={`icon-nowrap icon-${computeSize()} r-form-icon right top"`}
                  id={iconId ? iconId : "nbtextbox_icon_id"}
                >
                  {endIcon}
                </div>
              </div>
            )}

            {endIcons && endIcons?.length > 0 && (
              <div className="r-input-wrapper">
                <input
                  type="text"
                  className={`r-input-form-control size-${computeSize()} ${variant} icon-group-right ${uiTask ? "uitask" : ""} ${mandatory ? "mandatory" : ""} ${color}`}
                  value={value}
                  onChange={handleChange}
                  disabled={disabled}
                  placeholder={placeholder}
                  id={fieldId ? fieldId : "nbtextbox_field_id"}
                />
                <div className="icon-group r-form-icon right center-top">
                  {endIcons &&
                    endIcons?.map((item: any, idx: number) => (
                      <div
                        className={`icon-nowrap icon-${computeSize()}`}
                        key={idx}
                        onClick={handletask}
                        id={iconId ? iconId : "nbtextbox_icon_id"}
                      >
                        {item.endIcon}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {!startIcon && !endIcon && !endIcons && (
              <input
                type="text"
                disabled={disabled}
                className={`r-input-form-control size-${computeSize()} ${
                  error ? "error" : ""
                } ${success ? "success" : ""} ${variant} ${uiTask ? "uitask" : ""} ${
                  mandatory ? "mandatory" : ""
                } ${color}`}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                id={fieldId ? fieldId : "nbtextbox_field_id"}
              />
            )}
            {helpTask && (
              <label
                className={`r-input-caption ${variant} ${error ? "error" : ""} ${
                  success ? "success" : ""
                }`}
                id={helpTaskId ? helpTaskId : "nbtextbox_helptask_id"}
              >
                {helpTask}
              </label>
            )}
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </>
    );
  }
};
