
## MR 搜索两个中文汉字，无搜索结果

1. In the file `lib/gitlab/sql/pattern.rb`, you can find this line:
    
    ```
    MIN_CHARS_FOR_PARTIAL_MATCHING = 3
    ```
2. Change `3` to `1`
3. Restart GitLab:
    ```
    gitlab-ctl restart
    ```

## 迁移gitlab仓库，mr信息没同步

删除 仓库settings里面webhooks 里面所有webhook