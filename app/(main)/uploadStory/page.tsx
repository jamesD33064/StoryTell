"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CommonLoaded from "@/components/CommonLoaded/page";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  storyName: z.string().min(1, {
    message: "給個名字吧大哥大姐",
  }),
  storyContent: z
    .string()
    .min(10, {
      message: "太少字了吧？去弄google翻譯自己生成拉",
    })
    .max(1200, {
      message: "最多 1200 字拉 抱歉ＱＱ.",
    }),
  storyImg: z.string(),
  storyLang: z.string(),
});

export default function UploadStory() {
  const [loaded, setLoaded] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storyName: "",
      storyContent: "",
      storyImg: "LittleRedRidingHood",
      storyLang: "C",
    },
  });

  function isChinese(str: string) {
    return /[\u4e00-\u9fa5]/.test(str);
  }
  function isJapanese(str: string) {
    return /[\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\u2CEB0-\u2EBEF]/.test(
      str
    );
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.storyLang = isChinese(values.storyContent) ? "C" : "J";
    values.storyLang = isJapanese(values.storyContent) ? "J" : "C";
    setLoaded(true);
    try {
      const response = await axios.post(
        "https://storytell-backend.fcuvoice.com/api/story/uploadStoryWithString",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.status === 200) {
        setLoaded(false);
        toast({
          title: "上傳成功",
          description: values.storyName + "正在排隊生成語音中！",
        });
      } else {
        toast({
          title: "上傳失敗",
          description:
            "失敗就算了吧！跟開發團隊講一下，然後就可以去玩別的事情了。",
        });
      }
    } catch (error) {
      toast({
        title: "笑死大噴錯",
        description: "沒救了放棄這個功能吧！",
      });
    }
  }

  return (
    <>
      <div className="flex w-screen flex-grow items-center justify-center p-4 pb-20">
        {loaded ? <CommonLoaded /> : ""}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="storyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>故事名稱</FormLabel>
                  <FormControl>
                    <Input placeholder="小紅帽" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storyContent"
              render={({ field }) => (
                <FormItem className="pt-2">
                  <FormLabel>故事內容</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="小紅帽今天開開心心出門...."
                      className="h-80"
                      {...form.register("storyContent")}
                    />
                  </FormControl>
                  <FormDescription>
                    其實可以填上任何你想要的話喔！（但是只能全中文或全日文拉＠＠）
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem className="hidden">
              <FormLabel>故事圖片</FormLabel>
              <FormControl>
                <Input placeholder="小紅帽" {...form.register("storyImg")} />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem className="hidden">
              <FormLabel>故事語言</FormLabel>
              <FormControl>
                <Input placeholder="小紅帽" {...form.register("storyLang")} />
              </FormControl>
              <FormMessage />
            </FormItem>

            <Button type="submit" className="w-full mt-4">
              上傳故事
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
