package com.example.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val NexaPlayColorScheme = darkColorScheme(
    primary = PrimaryPurple,
    onPrimary = Color.White,
    primaryContainer = DarkSurfaceVariant,
    onPrimaryContainer = Color.White,
    secondary = SecondaryCyan,
    onSecondary = Color.Black,
    secondaryContainer = Color(0xFF164E63),
    onSecondaryContainer = SecondaryCyanGlow,
    tertiary = AccentEmerald,
    onTertiary = Color.Black,
    background = DarkBg,
    onBackground = TextPrimary,
    surface = DarkSurface,
    onSurface = TextPrimary,
    surfaceVariant = DarkSurfaceVariant,
    onSurfaceVariant = TextSecondary,
    outline = DarkBorder,
    error = AccentCoral,
    onError = Color.White
)

@Composable
fun NexaPlayTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = NexaPlayColorScheme,
        typography = Typography,
        content = content
    )
}
