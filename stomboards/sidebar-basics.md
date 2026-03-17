# Sidebar Basics

## Builder-style Full Update

::: code-group

```kotlin [Kotlin]
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.minestom.server.scoreboard.Sidebar.NumberFormat

sidebar.update {
        title(Component.text("Sidebar", NamedTextColor.YELLOW))
        line(Component.empty())
        line("123", NumberFormat.blank())
        line(Component.empty())
}
```

```java [Java]
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.format.NamedTextColor;
import net.minestom.server.scoreboard.Sidebar.NumberFormat;

sidebar.update(builder -> builder
        .title(Component.text("Sidebar", NamedTextColor.YELLOW))
        .line(Component.empty())
        .line("123", NumberFormat.blank())
        .line(Component.empty()));
```

:::

## Update Title and Lines

::: code-group

```kotlin [Kotlin]
manager.updateTitle(player, "Matchmaking")
manager.updateLine(player, 1, "Rank: Premium")
```

```java [Java]
manager.updateTitle(player, "Matchmaking");
manager.updateLine(player, 1, "Rank: Premium");
```

:::

## Update Placeholder Values

`setReplacers` replaces the full map. `addReplacers` merges into the current map.

::: code-group

```kotlin [Kotlin]
manager.setReplacers(player, mapOf("{online}" to "140"))
manager.addReplacers(player, mapOf("{rank}" to "VIP"))
```

```java [Java]
manager.setReplacers(player, Map.of("{online}", "140"));
manager.addReplacers(player, Map.of("{rank}", "VIP"));
```

:::

## Line Limits and Indexes

- Maximum line count: `15`
- Line index starts at `0`

If a line index is out of bounds, the update is safely ignored.
