# Animations

## Animate Title

::: code-group

```kotlin [Kotlin]
manager.animateTitle(
    player = player,
    frames = listOf("Lobby", "Queue", "Arena"),
    intervalMs = 500
)
```

```java [Java]
manager.animateTitle(
    player,
    List.of("Lobby", "Queue", "Arena"),
    500
);
```

:::

## Animate One Line

::: code-group

```kotlin [Kotlin]
manager.animateLine(
    player = player,
    lineIndex = 0,
    frames = listOf("Player: Steve", "Player: STEVE"),
    intervalMs = 250
)
```

```java [Java]
manager.animateLine(
    player,
    0,
    List.of("Player: Steve", "Player: STEVE"),
    250
);
```

:::

## Animate Replacers

::: code-group

```kotlin [Kotlin]
manager.animateReplacers(player, intervalMs = 1000) {
    mapOf(
        "{online}" to onlinePlayerCount().toString(),
        "{coins}" to getCoins(player).toString()
    )
}
```

```java [Java]
manager.animateReplacers(player, 1000, () -> Map.of(
    "{online}", Integer.toString(onlinePlayerCount()),
    "{coins}", Integer.toString(getCoins(player))
));
```

:::

## Stop Running Animations

::: code-group

```kotlin [Kotlin]
manager.stopAnimations(player)
```

```java [Java]
manager.stopAnimations(player);
```

:::
