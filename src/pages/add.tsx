import { PageProps } from "gatsby"
import React from "react"
import { useForm } from "react-hook-form"
import Layout from "~/components/layout"
import Seo from "~/components/seo"
import { toast } from "~/components/toast"
import { postVideoInfo, PostVideoInfo } from "~/modules/google-sheets"
import * as styles from "~/styles/pages/add.module.css"

const requiredMessage = "この値は必須です。"

type FormData = {
  title: string
  url: string
  startHours: number
  startMinutes: number
  startSeconds: number
  endHours: number
  endMinutes: number
  endSeconds: number
  person: string
  createdBy: string
}

const padNumber = (value: number): string => {
  return ("" + value).padStart(2, "0")
}

const AddPage: React.FC<PageProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>()

  const onSubmit = handleSubmit(data => {
    const start = Number.isNaN(data.startHours)
      ? `${data.startMinutes}:${padNumber(data.startSeconds)}`
      : `${data.startHours}:${padNumber(data.startMinutes)}:${padNumber(
          data.startSeconds
        )}`
    const end = Number.isNaN(data.endHours)
      ? `${data.endMinutes}:${padNumber(data.endSeconds)}`
      : `${data.endHours}:${padNumber(data.endMinutes)}:${padNumber(
          data.endSeconds
        )}`

    const createdAt = (() => {
      const result = new Date()
      return `${result.getFullYear()}/${padNumber(
        result.getMonth() + 1
      )}/${padNumber(result.getDate())}`
    })()
    const videoInfo: PostVideoInfo = {
      title: data.title,
      url: data.url,
      start,
      end,
      person: data.person,
      createdAt,
      createdBy: data.createdBy,
    }
    toast("追加ありがとうございます！")
    postVideoInfo(videoInfo)
    reset()
    setValue("createdBy", data.createdBy)
  })
  return (
    <Layout>
      <Seo title="名場面の追加" />
      <h2 className={styles.heading}>名場面の追加</h2>
      <p>
        <a
          href="https://docs.google.com/spreadsheets/d/1aT4i9__D9y-JOgfmfBxL1TYJSyMmRX_OhGcRr83XL_0/edit?usp=sharing"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          スプレッドシート
        </a>{" "}
        の「ドラフト版 from Web App」シートに名場面を追加します。
        <br />
        内容を確認して「正式版」シートに移動させ次第、このサイトに反映されます。
      </p>
      <p>
        なお、追加したもののライセンスは{" "}
        <a
          href="https://creativecommons.org/publicdomain/zero/1.0/deed.ja"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          CC0-1.0
        </a>{" "}
        となりますのでご注意ください。
      </p>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <label className={styles.formLabel}>
          <span className={styles.formLabelValue}>タイトル</span>
          <input
            className={errors.title ? styles.formInputError : styles.formInput}
            {...register("title", { required: requiredMessage })}
          />
          {errors.title && (
            <p className={styles.formInputErrorMessage}>
              {errors.title.message}
            </p>
          )}
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formLabelValue}>URL</span>
          <input
            type="url"
            placeholder="https://www.youtube.com/watch?v="
            className={errors.url ? styles.formInputError : styles.formInput}
            {...register("url", {
              required: requiredMessage,
              pattern: {
                value: /https:\/\/(www|m)\.youtube\.com\/watch\?v=.+/,
                message: "YouTube のURLのみ有効です。",
              },
            })}
          />
          {errors.url && (
            <p className={styles.formInputErrorMessage}>{errors.url.message}</p>
          )}
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formLabelValue}>開始タイムスタンプ</span>
          <span className={styles.formInputMultipleContainer}>
            <input
              type="number"
              min={0}
              className={
                errors.startHours ? styles.formInputError : styles.formInput
              }
              {...register("startHours", {
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "開始時は0以上である必要があります。",
                },
              })}
            />
            <span className={styles.formInputMultipleSeparator}>:</span>
            <input
              type="number"
              max={59}
              min={0}
              className={
                errors.startMinutes ? styles.formInputError : styles.formInput
              }
              {...register("startMinutes", {
                required: "開始分は必須です。",
                valueAsNumber: true,
                max: {
                  value: 59,
                  message: "開始分は59以下である必要があります。",
                },
                min: {
                  value: 0,
                  message: "開始分は0以上である必要があります。",
                },
              })}
            />
            <span className={styles.formInputMultipleSeparator}>:</span>
            <input
              type="number"
              max={59}
              min={0}
              className={
                errors.startSeconds ? styles.formInputError : styles.formInput
              }
              {...register("startSeconds", {
                required: "開始秒は必須です。",
                valueAsNumber: true,
                max: {
                  value: 59,
                  message: "開始秒は59以下である必要があります。",
                },
                min: {
                  value: 0,
                  message: "開始秒は0以上である必要があります。",
                },
              })}
            />
          </span>
          {errors.startHours && (
            <p className={styles.formInputErrorMessage}>
              {errors.startHours.message}
            </p>
          )}
          {errors.startMinutes && (
            <p className={styles.formInputErrorMessage}>
              {errors.startMinutes.message}
            </p>
          )}
          {errors.startSeconds && (
            <p className={styles.formInputErrorMessage}>
              {errors.startSeconds.message}
            </p>
          )}
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formLabelValue}>終了タイムスタンプ</span>
          <span className={styles.formInputMultipleContainer}>
            <input
              type="number"
              min={0}
              className={
                errors.endHours ? styles.formInputError : styles.formInput
              }
              {...register("endHours", {
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "終了時は0以上である必要があります。",
                },
              })}
            />
            <span className={styles.formInputMultipleSeparator}>:</span>
            <input
              type="number"
              max={59}
              min={0}
              className={
                errors.endMinutes ? styles.formInputError : styles.formInput
              }
              {...register("endMinutes", {
                required: "終了分は必須です。",
                valueAsNumber: true,
                max: {
                  value: 59,
                  message: "終了分は59以下である必要があります。",
                },
                min: {
                  value: 0,
                  message: "終了分は0以上である必要があります。",
                },
              })}
            />
            <span className={styles.formInputMultipleSeparator}>:</span>
            <input
              type="number"
              max={59}
              min={0}
              className={
                errors.endSeconds ? styles.formInputError : styles.formInput
              }
              {...register("endSeconds", {
                required: "終了秒は必須です。",
                valueAsNumber: true,
                max: {
                  value: 59,
                  message: "終了秒は59以下である必要があります。",
                },
                min: {
                  value: 0,
                  message: "終了秒は0以上である必要があります。",
                },
              })}
            />
          </span>
          {errors.endHours && (
            <p className={styles.formInputErrorMessage}>
              {errors.endHours.message}
            </p>
          )}
          {errors.endMinutes && (
            <p className={styles.formInputErrorMessage}>
              {errors.endMinutes.message}
            </p>
          )}
          {errors.endSeconds && (
            <p className={styles.formInputErrorMessage}>
              {errors.endSeconds.message}
            </p>
          )}
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formLabelValue}>メインの人物</span>
          <select
            className={errors.person ? styles.formInputError : styles.formInput}
            {...register("person", { required: requiredMessage })}
          >
            <option value="いもはん">いもはん</option>
            <option value="あにはん">あにはん</option>
            <option value="両方">両方</option>
          </select>
          {errors.person && (
            <p className={styles.formInputErrorMessage}>
              {errors.person.message}
            </p>
          )}
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formLabelValue}>追加者</span>
          <input
            className={
              errors.createdBy ? styles.formInputError : styles.formInput
            }
            {...register("createdBy", { required: requiredMessage })}
          />
          {errors.createdBy && (
            <p className={styles.formInputErrorMessage}>
              {errors.createdBy.message}
            </p>
          )}
        </label>
        <button className={styles.formSubmit} type="submit">
          追加
        </button>
      </form>
    </Layout>
  )
}

export default AddPage
