# Player Lifecycle

Use this pattern to avoid leaked tasks/viewers.

## On Join

::: code-group

```kotlin [Kotlin]
manager.assign(player, lobbySidebar, buildReplacers(player))
```

```java [Java]
manager.assign(player, lobbySidebar, buildReplacers(player));
```

:::

## On Data Change

::: code-group

```kotlin [Kotlin]
manager.addReplacers(player, mapOf("{online}" to onlinePlayerCount().toString()))
```

```java [Java]
manager.addReplacers(player, Map.of("{online}", Integer.toString(onlinePlayerCount())));
```

:::

## On Quit

::: code-group

```kotlin [Kotlin]
manager.remove(player)
```

```java [Java]
manager.remove(player);
```

:::

`remove(player)` detaches the sidebar and stops active animation tasks.
